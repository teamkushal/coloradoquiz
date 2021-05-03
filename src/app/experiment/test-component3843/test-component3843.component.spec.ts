import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3843Component } from './test-component3843.component';

describe('TestComponent3843Component', () => {
  let component: TestComponent3843Component;
  let fixture: ComponentFixture<TestComponent3843Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3843Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
