import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3249Component } from './test-component3249.component';

describe('TestComponent3249Component', () => {
  let component: TestComponent3249Component;
  let fixture: ComponentFixture<TestComponent3249Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3249Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
