import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3721Component } from './test-component3721.component';

describe('TestComponent3721Component', () => {
  let component: TestComponent3721Component;
  let fixture: ComponentFixture<TestComponent3721Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3721Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
