import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1180Component } from './test-component1180.component';

describe('TestComponent1180Component', () => {
  let component: TestComponent1180Component;
  let fixture: ComponentFixture<TestComponent1180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
