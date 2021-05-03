import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3241Component } from './test-component3241.component';

describe('TestComponent3241Component', () => {
  let component: TestComponent3241Component;
  let fixture: ComponentFixture<TestComponent3241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3241Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
