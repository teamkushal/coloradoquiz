import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1278Component } from './test-component1278.component';

describe('TestComponent1278Component', () => {
  let component: TestComponent1278Component;
  let fixture: ComponentFixture<TestComponent1278Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1278Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
