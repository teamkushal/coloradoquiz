import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1336Component } from './test-component1336.component';

describe('TestComponent1336Component', () => {
  let component: TestComponent1336Component;
  let fixture: ComponentFixture<TestComponent1336Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1336Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
