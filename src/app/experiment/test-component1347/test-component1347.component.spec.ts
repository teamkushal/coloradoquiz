import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1347Component } from './test-component1347.component';

describe('TestComponent1347Component', () => {
  let component: TestComponent1347Component;
  let fixture: ComponentFixture<TestComponent1347Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1347Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
