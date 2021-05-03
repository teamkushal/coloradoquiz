import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3512Component } from './test-component3512.component';

describe('TestComponent3512Component', () => {
  let component: TestComponent3512Component;
  let fixture: ComponentFixture<TestComponent3512Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3512Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
