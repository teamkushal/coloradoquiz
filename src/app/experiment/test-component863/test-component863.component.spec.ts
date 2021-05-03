import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent863Component } from './test-component863.component';

describe('TestComponent863Component', () => {
  let component: TestComponent863Component;
  let fixture: ComponentFixture<TestComponent863Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent863Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
