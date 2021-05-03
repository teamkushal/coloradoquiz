import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1318Component } from './test-component1318.component';

describe('TestComponent1318Component', () => {
  let component: TestComponent1318Component;
  let fixture: ComponentFixture<TestComponent1318Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1318Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
