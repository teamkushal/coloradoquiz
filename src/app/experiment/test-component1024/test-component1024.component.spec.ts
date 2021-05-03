import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1024Component } from './test-component1024.component';

describe('TestComponent1024Component', () => {
  let component: TestComponent1024Component;
  let fixture: ComponentFixture<TestComponent1024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1024Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
