import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1649Component } from './test-component1649.component';

describe('TestComponent1649Component', () => {
  let component: TestComponent1649Component;
  let fixture: ComponentFixture<TestComponent1649Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1649Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
