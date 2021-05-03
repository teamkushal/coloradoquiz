import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3774Component } from './test-component3774.component';

describe('TestComponent3774Component', () => {
  let component: TestComponent3774Component;
  let fixture: ComponentFixture<TestComponent3774Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3774Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
