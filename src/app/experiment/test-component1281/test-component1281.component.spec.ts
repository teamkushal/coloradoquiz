import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1281Component } from './test-component1281.component';

describe('TestComponent1281Component', () => {
  let component: TestComponent1281Component;
  let fixture: ComponentFixture<TestComponent1281Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1281Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
