import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1251Component } from './test-component1251.component';

describe('TestComponent1251Component', () => {
  let component: TestComponent1251Component;
  let fixture: ComponentFixture<TestComponent1251Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1251Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
