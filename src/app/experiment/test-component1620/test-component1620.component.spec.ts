import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1620Component } from './test-component1620.component';

describe('TestComponent1620Component', () => {
  let component: TestComponent1620Component;
  let fixture: ComponentFixture<TestComponent1620Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1620Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
