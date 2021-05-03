import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3849Component } from './test-component3849.component';

describe('TestComponent3849Component', () => {
  let component: TestComponent3849Component;
  let fixture: ComponentFixture<TestComponent3849Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3849Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
