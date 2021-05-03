import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2498Component } from './test-component2498.component';

describe('TestComponent2498Component', () => {
  let component: TestComponent2498Component;
  let fixture: ComponentFixture<TestComponent2498Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2498Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
