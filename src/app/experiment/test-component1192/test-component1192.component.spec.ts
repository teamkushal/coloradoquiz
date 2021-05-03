import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1192Component } from './test-component1192.component';

describe('TestComponent1192Component', () => {
  let component: TestComponent1192Component;
  let fixture: ComponentFixture<TestComponent1192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
