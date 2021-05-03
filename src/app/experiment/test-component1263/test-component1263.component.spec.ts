import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1263Component } from './test-component1263.component';

describe('TestComponent1263Component', () => {
  let component: TestComponent1263Component;
  let fixture: ComponentFixture<TestComponent1263Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1263Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
