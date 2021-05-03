import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent772Component } from './test-component772.component';

describe('TestComponent772Component', () => {
  let component: TestComponent772Component;
  let fixture: ComponentFixture<TestComponent772Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent772Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
