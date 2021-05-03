import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3821Component } from './test-component3821.component';

describe('TestComponent3821Component', () => {
  let component: TestComponent3821Component;
  let fixture: ComponentFixture<TestComponent3821Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3821Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
