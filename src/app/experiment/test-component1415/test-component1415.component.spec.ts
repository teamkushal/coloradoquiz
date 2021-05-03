import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1415Component } from './test-component1415.component';

describe('TestComponent1415Component', () => {
  let component: TestComponent1415Component;
  let fixture: ComponentFixture<TestComponent1415Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1415Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
