import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1135Component } from './test-component1135.component';

describe('TestComponent1135Component', () => {
  let component: TestComponent1135Component;
  let fixture: ComponentFixture<TestComponent1135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
