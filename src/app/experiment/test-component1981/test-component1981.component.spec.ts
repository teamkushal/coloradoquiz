import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1981Component } from './test-component1981.component';

describe('TestComponent1981Component', () => {
  let component: TestComponent1981Component;
  let fixture: ComponentFixture<TestComponent1981Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1981Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
