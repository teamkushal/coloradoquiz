import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3553Component } from './test-component3553.component';

describe('TestComponent3553Component', () => {
  let component: TestComponent3553Component;
  let fixture: ComponentFixture<TestComponent3553Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3553Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
