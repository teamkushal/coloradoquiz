import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3712Component } from './test-component3712.component';

describe('TestComponent3712Component', () => {
  let component: TestComponent3712Component;
  let fixture: ComponentFixture<TestComponent3712Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3712Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
