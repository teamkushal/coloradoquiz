import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1606Component } from './test-component1606.component';

describe('TestComponent1606Component', () => {
  let component: TestComponent1606Component;
  let fixture: ComponentFixture<TestComponent1606Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1606Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
