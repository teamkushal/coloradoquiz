import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1531Component } from './test-component1531.component';

describe('TestComponent1531Component', () => {
  let component: TestComponent1531Component;
  let fixture: ComponentFixture<TestComponent1531Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1531Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
