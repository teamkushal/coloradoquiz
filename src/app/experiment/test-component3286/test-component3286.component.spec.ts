import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3286Component } from './test-component3286.component';

describe('TestComponent3286Component', () => {
  let component: TestComponent3286Component;
  let fixture: ComponentFixture<TestComponent3286Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3286Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
