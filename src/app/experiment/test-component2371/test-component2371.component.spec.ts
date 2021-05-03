import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2371Component } from './test-component2371.component';

describe('TestComponent2371Component', () => {
  let component: TestComponent2371Component;
  let fixture: ComponentFixture<TestComponent2371Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2371Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
