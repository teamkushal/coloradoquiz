import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent765Component } from './test-component765.component';

describe('TestComponent765Component', () => {
  let component: TestComponent765Component;
  let fixture: ComponentFixture<TestComponent765Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent765Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
