import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1189Component } from './test-component1189.component';

describe('TestComponent1189Component', () => {
  let component: TestComponent1189Component;
  let fixture: ComponentFixture<TestComponent1189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1189Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
