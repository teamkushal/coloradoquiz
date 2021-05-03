import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1340Component } from './test-component1340.component';

describe('TestComponent1340Component', () => {
  let component: TestComponent1340Component;
  let fixture: ComponentFixture<TestComponent1340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1340Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
