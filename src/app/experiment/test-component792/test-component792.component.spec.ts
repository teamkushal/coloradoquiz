import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent792Component } from './test-component792.component';

describe('TestComponent792Component', () => {
  let component: TestComponent792Component;
  let fixture: ComponentFixture<TestComponent792Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent792Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
