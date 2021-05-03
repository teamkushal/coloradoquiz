import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1108Component } from './test-component1108.component';

describe('TestComponent1108Component', () => {
  let component: TestComponent1108Component;
  let fixture: ComponentFixture<TestComponent1108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
