import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3016Component } from './test-component3016.component';

describe('TestComponent3016Component', () => {
  let component: TestComponent3016Component;
  let fixture: ComponentFixture<TestComponent3016Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3016Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
