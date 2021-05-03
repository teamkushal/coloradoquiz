import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3350Component } from './test-component3350.component';

describe('TestComponent3350Component', () => {
  let component: TestComponent3350Component;
  let fixture: ComponentFixture<TestComponent3350Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3350Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
