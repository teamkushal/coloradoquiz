import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3979Component } from './test-component3979.component';

describe('TestComponent3979Component', () => {
  let component: TestComponent3979Component;
  let fixture: ComponentFixture<TestComponent3979Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3979Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
