import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3371Component } from './test-component3371.component';

describe('TestComponent3371Component', () => {
  let component: TestComponent3371Component;
  let fixture: ComponentFixture<TestComponent3371Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3371Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
