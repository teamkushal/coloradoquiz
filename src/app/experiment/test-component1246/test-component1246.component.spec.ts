import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1246Component } from './test-component1246.component';

describe('TestComponent1246Component', () => {
  let component: TestComponent1246Component;
  let fixture: ComponentFixture<TestComponent1246Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1246Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
