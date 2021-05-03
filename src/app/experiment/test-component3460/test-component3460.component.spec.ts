import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3460Component } from './test-component3460.component';

describe('TestComponent3460Component', () => {
  let component: TestComponent3460Component;
  let fixture: ComponentFixture<TestComponent3460Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3460Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
