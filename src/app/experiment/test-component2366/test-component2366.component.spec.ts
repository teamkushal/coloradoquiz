import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2366Component } from './test-component2366.component';

describe('TestComponent2366Component', () => {
  let component: TestComponent2366Component;
  let fixture: ComponentFixture<TestComponent2366Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2366Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
