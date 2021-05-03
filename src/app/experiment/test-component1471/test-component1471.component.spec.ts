import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1471Component } from './test-component1471.component';

describe('TestComponent1471Component', () => {
  let component: TestComponent1471Component;
  let fixture: ComponentFixture<TestComponent1471Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1471Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
