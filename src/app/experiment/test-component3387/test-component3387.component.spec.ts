import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3387Component } from './test-component3387.component';

describe('TestComponent3387Component', () => {
  let component: TestComponent3387Component;
  let fixture: ComponentFixture<TestComponent3387Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3387Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
