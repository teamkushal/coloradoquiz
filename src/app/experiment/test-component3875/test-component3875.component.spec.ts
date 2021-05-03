import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3875Component } from './test-component3875.component';

describe('TestComponent3875Component', () => {
  let component: TestComponent3875Component;
  let fixture: ComponentFixture<TestComponent3875Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3875Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
