import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3629Component } from './test-component3629.component';

describe('TestComponent3629Component', () => {
  let component: TestComponent3629Component;
  let fixture: ComponentFixture<TestComponent3629Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3629Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
