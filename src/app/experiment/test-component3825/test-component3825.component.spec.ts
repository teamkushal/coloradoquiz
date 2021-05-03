import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3825Component } from './test-component3825.component';

describe('TestComponent3825Component', () => {
  let component: TestComponent3825Component;
  let fixture: ComponentFixture<TestComponent3825Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3825Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
