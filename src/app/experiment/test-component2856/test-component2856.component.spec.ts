import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2856Component } from './test-component2856.component';

describe('TestComponent2856Component', () => {
  let component: TestComponent2856Component;
  let fixture: ComponentFixture<TestComponent2856Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2856Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
