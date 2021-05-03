import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1855Component } from './test-component1855.component';

describe('TestComponent1855Component', () => {
  let component: TestComponent1855Component;
  let fixture: ComponentFixture<TestComponent1855Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1855Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
