import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3681Component } from './test-component3681.component';

describe('TestComponent3681Component', () => {
  let component: TestComponent3681Component;
  let fixture: ComponentFixture<TestComponent3681Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3681Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
