import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1858Component } from './test-component1858.component';

describe('TestComponent1858Component', () => {
  let component: TestComponent1858Component;
  let fixture: ComponentFixture<TestComponent1858Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1858Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
